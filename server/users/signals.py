from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):

    if created:
        from users.models import Profile
        Profile.objects.create(user=instance)


def update_user_profile(sender, instance, **kwargs):

    if hasattr(instance, 'profile'):
        instance.profile.save()