from django.contrib import admin
from .models import CustomUser, Profile, Connect, VerificationRequest, Notification, UserPunishment

admin.site.register([CustomUser, Profile, Connect, VerificationRequest, Notification, UserPunishment])


class UserAdmin(admin.ModelAdmin):
    fields = ('email', 'first_name', 'last_name')
    list_display = ('email', 'first_name', 'last_name')
