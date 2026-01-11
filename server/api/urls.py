from django.urls import path, include
from rest_framework import routers

from api.chat.resurceview import ChatMessageViewSet, MessageHistoryViewSet

router = routers.DefaultRouter()
router.register('chatmessages', ChatMessageViewSet)
router.register('messagehistory', MessageHistoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]