from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Item(models.Model):
    """Model representing a item."""
    name = models.CharField(max_length=100, help_text='Enter an Item Name')
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True,)

    def __str__(self):
        """String for representing the Model object."""
        return self.name