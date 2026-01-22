from django.urls import path, include
from django.contrib import admin
from rest_framework import routers

from api.chat.resurceview import ChatRoomViewSet

router = routers.DefaultRouter()
router.register('chatrooms', ChatRoomViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
