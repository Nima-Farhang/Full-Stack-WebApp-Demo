from socket import AddressInfo
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.

class Address(models.Model):
    
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True,)
    id = models.CharField( editable=False, max_length=600)
    physical_address = models.CharField(max_length=1000, null=True, blank=True)
    coordinates = models.JSONField()
    apiResults = models.JSONField()

    def __str__(self):
        return self.physical_address

@receiver(post_save, sender=User)
def create_update_address(sender, instance, created, **kwargs):
    if created:
        Address.objects.create(user=instance)
    else:
        try:
            instance.address.save()
        except Address.DoesNotExist:
            Address.objects.create(user=instance)

