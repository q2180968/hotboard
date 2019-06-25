from django.contrib import admin
from .models import Source, Kind, HostList


class UserProfileAdmin(admin.ModelAdmin):
    pass


admin.site.register(Source)
admin.site.register(Kind)
admin.site.register(HostList)
