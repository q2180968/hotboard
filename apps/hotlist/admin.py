from django.contrib import admin
from apps.hotlist.models import Source, Kind, HostList


class UserProfileAdmin(admin.ModelAdmin):
    pass


admin.site.register(Source)
admin.site.register(Kind)
admin.site.register(HostList)
