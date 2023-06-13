# Generated by Django 4.1.7 on 2023-06-09 18:39

import detail.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('detail', '0002_alter_medicinalunit_medicine'),
    ]

    operations = [
        migrations.AddField(
            model_name='plant',
            name='editor_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='editor_user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='medicinalunit',
            name='medicine',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='medicine_unit', to='detail.medicine'),
        ),
        migrations.AlterField(
            model_name='medicinalunit',
            name='plant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='medicinal_properties', to='detail.plant'),
        ),
        migrations.AlterField(
            model_name='plant',
            name='image',
            field=models.ImageField(blank=True, upload_to=detail.models.set_model_path, verbose_name='Image'),
        ),
    ]
