# Generated by Django 4.0.2 on 2022-02-03 23:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Favorites',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pokemonId', models.IntegerField()),
                ('userId', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='playground.user')),
            ],
        ),
    ]
