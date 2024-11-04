# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 04, 2024 15:53:10
# Database: sqlite:////tmp/tmp.9OZvRHWKAj/Prueba/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Driver(SAFRSBaseX, Base):
    """
    description: Represents drivers who operate vehicles.
    """
    __tablename__ = 'driver'
    _s_collection_name = 'Driver'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    license_number = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Location(SAFRSBaseX, Base):
    """
    description: Represents predefined locations of interest.
    """
    __tablename__ = 'location'
    _s_collection_name = 'Location'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    RouteList : Mapped[List["Route"]] = relationship(foreign_keys='[Route.end_location_id]', back_populates="end_location")
    startRouteList : Mapped[List["Route"]] = relationship(foreign_keys='[Route.start_location_id]', back_populates="start_location")
    TripList : Mapped[List["Trip"]] = relationship(foreign_keys='[Trip.end_location_id]', back_populates="end_location")
    startTripList : Mapped[List["Trip"]] = relationship(foreign_keys='[Trip.start_location_id]', back_populates="start_location")
    CheckpointList : Mapped[List["Checkpoint"]] = relationship(back_populates="location")



class User(SAFRSBaseX, Base):
    """
    description: Represents users of the system.
    """
    __tablename__ = 'user'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    UserVehicleList : Mapped[List["UserVehicle"]] = relationship(back_populates="user")



class Vehicle(SAFRSBaseX, Base):
    """
    description: Represents vehicles being tracked.
    """
    __tablename__ = 'vehicle'
    _s_collection_name = 'Vehicle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    make = Column(String, nullable=False)
    model = Column(String, nullable=False)
    year = Column(Integer)

    # parent relationships (access parent)

    # child relationships (access children)
    AlertList : Mapped[List["Alert"]] = relationship(back_populates="vehicle")
    GpsDatumList : Mapped[List["GpsDatum"]] = relationship(back_populates="vehicle")
    MaintenanceScheduleList : Mapped[List["MaintenanceSchedule"]] = relationship(back_populates="vehicle")
    ServiceRecordList : Mapped[List["ServiceRecord"]] = relationship(back_populates="vehicle")
    TripList : Mapped[List["Trip"]] = relationship(back_populates="vehicle")
    UserVehicleList : Mapped[List["UserVehicle"]] = relationship(back_populates="vehicle")



class Alert(SAFRSBaseX, Base):
    """
    description: Alerts related to vehicles, such as maintenance needs or anomalies.
    """
    __tablename__ = 'alert'
    _s_collection_name = 'Alert'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicle.id'), nullable=False)
    alert_type = Column(String, nullable=False)
    alert_date = Column(DateTime, nullable=False)
    description = Column(String)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("AlertList"))

    # child relationships (access children)



class GpsDatum(SAFRSBaseX, Base):
    """
    description: Stores GPS tracking data for vehicles.
    """
    __tablename__ = 'gps_data'
    _s_collection_name = 'GpsDatum'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicle.id'), nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    timestamp = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("GpsDatumList"))

    # child relationships (access children)



class MaintenanceSchedule(SAFRSBaseX, Base):
    """
    description: Schedule for regular maintenance activities for vehicles.
    """
    __tablename__ = 'maintenance_schedule'
    _s_collection_name = 'MaintenanceSchedule'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicle.id'), nullable=False)
    scheduled_date = Column(DateTime, nullable=False)
    description = Column(String)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("MaintenanceScheduleList"))

    # child relationships (access children)



class Route(SAFRSBaseX, Base):
    """
    description: Represents a predefined route for vehicles.
    """
    __tablename__ = 'route'
    _s_collection_name = 'Route'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    start_location_id = Column(ForeignKey('location.id'), nullable=False)
    end_location_id = Column(ForeignKey('location.id'), nullable=False)

    # parent relationships (access parent)
    end_location : Mapped["Location"] = relationship(foreign_keys='[Route.end_location_id]', back_populates=("RouteList"))
    start_location : Mapped["Location"] = relationship(foreign_keys='[Route.start_location_id]', back_populates=("startRouteList"))

    # child relationships (access children)
    CheckpointList : Mapped[List["Checkpoint"]] = relationship(back_populates="route")



class ServiceRecord(SAFRSBaseX, Base):
    """
    description: Records of maintenance service for vehicles.
    """
    __tablename__ = 'service_record'
    _s_collection_name = 'ServiceRecord'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicle.id'), nullable=False)
    service_date = Column(DateTime, nullable=False)
    description = Column(String)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("ServiceRecordList"))

    # child relationships (access children)



class Trip(SAFRSBaseX, Base):
    """
    description: Represents a trip made by a vehicle.
    """
    __tablename__ = 'trip'
    _s_collection_name = 'Trip'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicle.id'), nullable=False)
    start_location_id = Column(ForeignKey('location.id'), nullable=False)
    end_location_id = Column(ForeignKey('location.id'), nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime)

    # parent relationships (access parent)
    end_location : Mapped["Location"] = relationship(foreign_keys='[Trip.end_location_id]', back_populates=("TripList"))
    start_location : Mapped["Location"] = relationship(foreign_keys='[Trip.start_location_id]', back_populates=("startTripList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("TripList"))

    # child relationships (access children)



class UserVehicle(SAFRSBaseX, Base):
    """
    description: Links users to the vehicles they are responsible for.
    """
    __tablename__ = 'user_vehicle'
    _s_collection_name = 'UserVehicle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('user.id'), nullable=False)
    vehicle_id = Column(ForeignKey('vehicle.id'), nullable=False)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserVehicleList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("UserVehicleList"))

    # child relationships (access children)



class Checkpoint(SAFRSBaseX, Base):
    """
    description: Checkpoints within a predefined route.
    """
    __tablename__ = 'checkpoint'
    _s_collection_name = 'Checkpoint'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    route_id = Column(ForeignKey('route.id'), nullable=False)
    location_id = Column(ForeignKey('location.id'), nullable=False)
    sequence_number = Column(Integer, nullable=False)

    # parent relationships (access parent)
    location : Mapped["Location"] = relationship(back_populates=("CheckpointList"))
    route : Mapped["Route"] = relationship(back_populates=("CheckpointList"))

    # child relationships (access children)
