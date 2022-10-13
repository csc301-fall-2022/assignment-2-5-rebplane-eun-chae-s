'''
Followed tutorial from this link: https://github.com/sushil-kamble/django-react-auth
'''
from rest_framework import serializers
from .models import Item
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.validators import UniqueValidator

# User authentication
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['password'] = user.password
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password')
    
    def create(self, data):
        user = User.objects.create(
            username = data['username']
        )

        user.set_password(data['password'])
        user.save()

        return user

# Item Data
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'