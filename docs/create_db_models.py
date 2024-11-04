# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
import datetime

Base = declarative_base()

class User(Base):
    """description: Represents users of the system."""
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)

class Vehicle(Base):
    """description: Represents vehicles being tracked."""
    __tablename__ = 'vehicle'
    id = Column(Integer, primary_key=True, autoincrement=True)
    make = Column(String, nullable=False)
    model = Column(String, nullable=False)
    year = Column(Integer, nullable=True)

class GPSData(Base):
    """description: Stores GPS tracking data for vehicles."""
    __tablename__ = 'gps_data'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'), nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow, nullable=False)

class UserVehicle(Base):
    """description: Links users to the vehicles they are responsible for."""
    __tablename__ = 'user_vehicle'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'), nullable=False)

class Location(Base):
    """description: Represents predefined locations of interest."""
    __tablename__ = 'location'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String, nullable=True)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)

class Trip(Base):
    """description: Represents a trip made by a vehicle."""
    __tablename__ = 'trip'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'), nullable=False)
    start_location_id = Column(Integer, ForeignKey('location.id'), nullable=False)
    end_location_id = Column(Integer, ForeignKey('location.id'), nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=True)

class ServiceRecord(Base):
    """description: Records of maintenance service for vehicles."""
    __tablename__ = 'service_record'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'), nullable=False)
    service_date = Column(DateTime, nullable=False)
    description = Column(String, nullable=True)

class Alert(Base):
    """description: Alerts related to vehicles, such as maintenance needs or anomalies."""
    __tablename__ = 'alert'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'), nullable=False)
    alert_type = Column(String, nullable=False)
    alert_date = Column(DateTime, nullable=False)
    description = Column(String, nullable=True)

class Route(Base):
    """description: Represents a predefined route for vehicles."""
    __tablename__ = 'route'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    start_location_id = Column(Integer, ForeignKey('location.id'), nullable=False)
    end_location_id = Column(Integer, ForeignKey('location.id'), nullable=False)

class Checkpoint(Base):
    """description: Checkpoints within a predefined route."""
    __tablename__ = 'checkpoint'
    id = Column(Integer, primary_key=True, autoincrement=True)
    route_id = Column(Integer, ForeignKey('route.id'), nullable=False)
    location_id = Column(Integer, ForeignKey('location.id'), nullable=False)
    sequence_number = Column(Integer, nullable=False)

class MaintenanceSchedule(Base):
    """description: Schedule for regular maintenance activities for vehicles."""
    __tablename__ = 'maintenance_schedule'
    id = Column(Integer, primary_key=True, autoincrement=True)
    vehicle_id = Column(Integer, ForeignKey('vehicle.id'), nullable=False)
    scheduled_date = Column(DateTime, nullable=False)
    description = Column(String, nullable=True)

class Driver(Base):
    """description: Represents drivers who operate vehicles."""
    __tablename__ = 'driver'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    license_number = Column(String, nullable=False)

# Database setup
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Sample data
users = [
    User(username='john123', email='john@example.com'),
    User(username='alice456', email='alice@example.com')
]

vehicles = [
    Vehicle(make='Toyota', model='Corolla', year=2021),
    Vehicle(make='Ford', model='F150', year=2020)
]

gps_data = [
    GPSData(vehicle_id=1, latitude=34.0522, longitude=-118.2437),
    GPSData(vehicle_id=2, latitude=36.7783, longitude=-119.4179)
]

user_vehicles = [
    UserVehicle(user_id=1, vehicle_id=1),
    UserVehicle(user_id=2, vehicle_id=2)
]

locations = [
    Location(name='Downtown', latitude=34.0522, longitude=-118.2437),
    Location(name='Office', latitude=34.0489, longitude=-118.2529)
]

trips = [
    Trip(vehicle_id=1, start_location_id=1, end_location_id=2, start_time=datetime.datetime(2023, 10, 17, 8, 0)),
    Trip(vehicle_id=2, start_location_id=2, end_location_id=1, start_time=datetime.datetime(2023, 10, 17, 9, 0))
]

service_records = [
    ServiceRecord(vehicle_id=1, service_date=datetime.datetime(2023, 10, 15), description='Oil change'),
    ServiceRecord(vehicle_id=2, service_date=datetime.datetime(2023, 10, 16), description='Tire rotation')
]

alerts = [
    Alert(vehicle_id=1, alert_type='Maintenance', alert_date=datetime.datetime(2023, 10, 18), description='Oil change due'),
    Alert(vehicle_id=2, alert_type='Anomaly', alert_date=datetime.datetime(2023, 10, 19), description='Engine temperature high')
]

routes = [
    Route(name='Central Park Route', start_location_id=1, end_location_id=2),
    Route(name='Suburban Route', start_location_id=2, end_location_id=1)
]

checkpoints = [
    Checkpoint(route_id=1, location_id=1, sequence_number=1),
    Checkpoint(route_id=1, location_id=2, sequence_number=2)
]

maintenance_schedules = [
    MaintenanceSchedule(vehicle_id=1, scheduled_date=datetime.datetime(2023, 11, 1), description='Quarterly maintenance'),
    MaintenanceSchedule(vehicle_id=2, scheduled_date=datetime.datetime(2023, 12, 1), description='Bi-annual maintenance')
]

drivers = [
    Driver(name='John Doe', license_number='D1234567'),
    Driver(name='Alice Smith', license_number='D6543210')
]

# Add all sample data to the session
session.add_all(users + vehicles + gps_data + user_vehicles + locations +
                trips + service_records + alerts + routes + checkpoints +
                maintenance_schedules + drivers)

# Commit the transaction
session.commit()
