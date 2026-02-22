import uuid

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from users.managers import CustomUserManager

class CustomUser(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    username = models.CharField(_("username"), max_length=50, unique=True, blank=False, null=False)
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=50)
    last_name = models.CharField(_('last name'), max_length=50)
    is_admin = models.BooleanField(_("Admin MOD"), default=False)
    is_staff = models.BooleanField(_("Staff MOD"), default=False)
    is_moderator = models.BooleanField(_("Moderator MOD"),default=False)
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    bio = models.TextField(max_length=5000, blank=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.username} | {self.email}"

    def has_perms(self, perm_list, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    avatar = models.ImageField(_("avatar"), null=True, blank=True, upload_to="uploads/avatars/")
    banner = models.ImageField(_("banner"), null=True, blank=True, upload_to="uploads/banners/")
    bio = models.TextField(max_length=5000, blank=True)
    followers_count = models.IntegerField(default=0)
    following_count = models.IntegerField(default=0)

    def __str__(self):
        return f'Profile by {self.user.username}'