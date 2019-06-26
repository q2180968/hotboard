from django.shortcuts import render
from django.views.generic.base import View
from hotlist.models import Source


# 首页

class IndexView(View):
    def get(self, request):
        hot_source = Source.objects.filter(is_delete=0).order_by('click_times')[0:7]
        new_source = Source.objects.filter(is_delete=0).order_by('create_time')[0:3]
        return render(request, 'index.html', {"hot_source": hot_source, 'new_source': new_source})

    def post(self, request):
        pass
