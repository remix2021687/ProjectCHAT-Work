from django.contrib import admin
from .models import CustomUser

admin.site.register(CustomUser)

class UserAdmin(admin.ModelAdmin):
    fields = ('email', 'first_name', 'last_name')
    list_display = ('email', 'first_name', 'last_name')