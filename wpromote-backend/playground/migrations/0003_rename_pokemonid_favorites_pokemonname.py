# Generated by Django 4.0.2 on 2022-02-03 23:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0002_favorites'),
    ]

    operations = [
        migrations.RenameField(
            model_name='favorites',
            old_name='pokemonId',
            new_name='pokemonName',
        ),
    ]
