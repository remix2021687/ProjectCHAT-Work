from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path, include
from django.contrib import admin
from rest_framework import routers

from api.chat.resurceview import ChatRoomViewSet
from api.posts.resourceview import PostViewSet, CommentViewSet
from api.users.resourceview import ProfileViewSet, VerificationRequestViewSet

router = routers.DefaultRouter()
router.register('chatrooms', ChatRoomViewSet, basename='chatrooms')
router.register("posts", PostViewSet, basename='posts')
router.register('comments', CommentViewSet, basename='comment')
router.register('me', ProfileViewSet, basename='profile')
router.register('verify', VerificationRequestViewSet, basename='verify')

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('accounts/', include('allauth.urls')),
]
