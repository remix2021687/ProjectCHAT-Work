from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        from users.models import Profile
        Profile.objects.create(user=instance)


def update_user_profile(sender, instance, **kwargs):
    if hasattr(instance, 'profile'):
        instance.profile.save()


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def send_verification_email(sender, instance, created, **kwargs):
    if created and not instance.is_superuser:
        subject = 'Verify your account'
        message = f'Dear {instance.first_name} {instance.last_name}, your verification code is {instance.email_verification_code}'
        send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[instance.email],
            fail_silently=False,
        )
