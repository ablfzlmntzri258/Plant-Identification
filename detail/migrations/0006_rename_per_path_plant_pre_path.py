# Generated by Django 4.1.7 on 2023-06-12 09:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detail', '0005_plant_info_file_plant_per_path'),
    ]

    operations = [
        migrations.RenameField(
            model_name='plant',
            old_name='per_path',
            new_name='pre_path',
        ),
    ]
