# Generated by Django 4.1.7 on 2023-06-05 18:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('detail', '0004_rename_image_flower_flower_image_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='flower',
            old_name='flower_image',
            new_name='image',
        ),
        migrations.RenameField(
            model_name='leaf',
            old_name='leaf_image',
            new_name='image',
        ),
        migrations.RenameField(
            model_name='stem',
            old_name='stem_image',
            new_name='image',
        ),
    ]
