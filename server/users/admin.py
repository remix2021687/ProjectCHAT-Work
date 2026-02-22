from django.contrib import admin
from .models import CustomUser, Profile

admin.site.register([CustomUser, Profile])

class UserAdmin(admin.ModelAdmin):
    fields = ('email', 'first_name', 'last_name')
    list_display = ('email', 'first_name', 'last_name')