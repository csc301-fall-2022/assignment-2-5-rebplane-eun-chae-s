from rest_framework.test import APITestCase
from django.urls import reverse

# Create your tests here.
class CalculatorTest(APITestCase):  
    def setUp(self):
        self.user_data = {
            'username': 'lovecalc',
            'password': 'ctest#%',
        }
        register_url = reverse('auth_register')
        self.client.post(register_url, self.user_data, format='json')

    def test_login_failure(self):
        """
        Test case for failing log in
        """
        auth_url = reverse('token_obtain_pair')
        response = self.client.post(auth_url, {
            "username": self.user_data.get("username"),
            "password": "wrongpassword#",
        })
        self.assertNotEqual(response.status_code, 200)

    def test_login_success(self):
        """
        Test case for succeeding log in
        """
        auth_url = reverse('token_obtain_pair')
        response = self.client.post(auth_url, self.user_data)
        self.assertEqual(response.status_code, 200)

    def testing_calculator(self):
        """
        Test case for correctly calculating the total cost of products
        """
        auth_url = reverse('token_obtain_pair')
        access_token = self.client.post(auth_url, self.user_data).data.get("access")
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        self.client.post('/api/items/', {
            "name": 'Apple',
            "quantity": 5,
            "price": 2,
        })
        self.client.post('/api/items/', {
            "name": 'Banana',
            "quantity": 6,
            "price": 5,
        })
        response = self.client.get('/api/calculate/')
        self.assertEqual(response.data, 40.00)
