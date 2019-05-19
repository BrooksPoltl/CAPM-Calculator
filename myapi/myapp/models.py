from django.db import models

# Create your models here.
class Responses(models.Model):
    CAPM = models.FloatField()
    BETA = models.FloatField()
    TICKER = models.CharField(max_length = 50, default = '')