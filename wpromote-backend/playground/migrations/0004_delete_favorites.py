# Generated by Django 4.0.2 on 2022-02-03 23:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0003_rename_pokemonid_favorites_pokemonname'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Favorites',
        ),
    ]
