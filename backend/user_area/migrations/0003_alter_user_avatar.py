# Generated by Django 4.1.3 on 2023-05-01 05:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user_area', '0002_alter_user_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ForeignKey(blank=True, default=76, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='user_avatar', to='user_area.mediauser'),
        ),
    ]
