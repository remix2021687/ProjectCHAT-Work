from rest_framework.test import APITestCase
from rest_framework import status
from users.models import CustomUser


class UserViewSetTests(APITestCase):
    def setUp(self):
        self.register_url = '/api/users/register/'
        self.login_url = '/api/users/login/'
        self.verify_url = '/api/users/verify-email/'

    def test_register_user_success(self):
        data = {
            'first_name': 'Test',
            'last_name': 'User',
            'username': 'test',
            'email': 'test@gmail.com',
            'password': '2010665KE',
            'password_confirm': "2010665KE"
        }

        response = self.client.post(self.register_url, data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(CustomUser.objects.filter(email=data['email']).exists())

    def test_register_user_fail(self):
        data = {
            'first_name': 'Test',
            'last_name': 'User',
            'username': 'test',
            'email': 'test@gmail.com',
            'password': '2010665KE',
            'password_confirm': "2010665KE4545"
        }

        response = self.client.post(self.register_url, data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_register_user_exist(self):
        CustomUser.objects.create_user(
            first_name='Test',
            last_name='User',
            username='test',
            email='test@gmail.com',
            password='2010665KE',
        )
        data = {
            'first_name': 'Test',
            'last_name': 'User',
            'username': 'test',
            'email': 'test@gmail.com',
            'password': '2010665KE',
            'password_confirm': "2010665KE"
        }

        response = self.client.post(self.register_url, data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_login_user_success(self):
        user = CustomUser.objects.create_user(
            first_name='Test',
            last_name='User',
            username='test',
            email='test@gmail.com',
            password='2010665KE',
        )

        user.is_email_verified = True
        user.email_verification_code = None
        user.save()

        data = {
            'email': 'test@gmail.com',
            'password': '2010665KE',
        }

        response = self.client.post(self.login_url, data)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        self.assertTrue(CustomUser.objects.filter(email=data['email']).exists())

    def test_login_user_fail(self):
        user = CustomUser.objects.create_user(
            first_name='Test',
            last_name='User',
            username='test',
            email='test@gmail.com',
            password='2010665KE',
        )

        user.is_email_verified = True
        user.email_verification_code = None
        user.save()

        data = {
            'email': 'test@gmail.com',
            'password': '2010665',
        }

        response = self.client.post(self.login_url, data)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_verify_email_success(self):
        user = CustomUser.objects.create_user(
            first_name='Test',
            last_name='User',
            email="test@gmail.com",
            username='test',
            password="2010665KE"
        )

        user.email_verification_code = "123456"
        user.save()

        data = {
            "email": "test@gmail.com",
            "email_verification_code": "123456"
        }

        response = self.client.post(self.verify_url, data)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user.refresh_from_db()
        self.assertTrue(user.is_email_verified)

    def test_verify_email_fail(self):
        user = CustomUser.objects.create_user(
            first_name='Test',
            last_name='User',
            email="test@gmail.com",
            username='test',
            password="2010665KE"
        )

        user.email_verification_code = "123456"
        user.save()

        data = {
            "email": "test@gmail.com",
            "email_verification_code": "855789"
        }

        response = self.client.post(self.verify_url, data)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
