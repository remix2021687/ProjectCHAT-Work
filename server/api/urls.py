from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path, include
from django.contrib import admin
from rest_framework import routers

from api.chat.resurceview import ChatRoomViewSet
from api.posts.resourceview import PostViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register('chatrooms', ChatRoomViewSet)
router.register("posts", PostViewSet)
router.register('comments', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('accounts/', include('allauth.urls')),
]
