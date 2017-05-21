from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Roof(models.Model):
    name = models.CharField(max_length=128, blank=True, null=True)
    city = models.CharField(max_length=128, blank=True, null=True)
    address = models.CharField(max_length=128, blank=True, null=True)
    description = models.CharField(max_length=128, blank=True, null=True)
    website = models.CharField(max_length=128, blank=True, null=True)
    phone_no = models.CharField(max_length=128, blank=True, null=True)
    burough = models.CharField(max_length=128, blank=True, null=True)
    pictureURL = models.CharField(max_length=128, blank=True, null=True)
    
    calculated_rank = models.IntegerField(blank=True, null=True) #run a script to calc this based on all other ranks
    price_rank = models.IntegerField(blank=True, null=True)
    location_rank = models.IntegerField(blank=True, null=True)
    fun_rank = models.IntegerField(blank=True, null=True)
    view_rank = models.IntegerField(blank=True, null=True)
    crowd_rank = models.IntegerField(blank=True, null=True)
    crowd_type = models.CharField(max_length=128) #bro, douche, finance, etc.
    rose_price = models.IntegerField(blank=True, null=True)
    
    def __str__(self):
        return self.name


class ReviewsManager(models.Model):
    """
    all reviews for locations
    """
    roof = models.OneToOneField('Roof')
    reviewee = models.CharField(max_length=128)
    created = models.DateTimeField(auto_now_add=True)
    text = models.CharField(max_length=500)
    stars = models.IntegerField()

    def add_Review(self, roof, reviewee):
        review = ReviewsManager.objects.get_or_create(roof=roof, reviewee=reviewee)