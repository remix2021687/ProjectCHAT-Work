from django.contrib import admin
from .models import CustomUser, UserNotify

admin.site.register([CustomUser, UserNotify])

class UserAdmin(admin.ModelAdmin):
    fields = ('email', 'first_name', 'last_name')
    list_display = ('email', 'first_name', 'last_name')