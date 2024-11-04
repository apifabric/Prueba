import { MenuRootItem } from 'ontimize-web-ngx';

import { AlertCardComponent } from './Alert-card/Alert-card.component';

import { CheckpointCardComponent } from './Checkpoint-card/Checkpoint-card.component';

import { DriverCardComponent } from './Driver-card/Driver-card.component';

import { GpsDatumCardComponent } from './GpsDatum-card/GpsDatum-card.component';

import { LocationCardComponent } from './Location-card/Location-card.component';

import { MaintenanceScheduleCardComponent } from './MaintenanceSchedule-card/MaintenanceSchedule-card.component';

import { RouteCardComponent } from './Route-card/Route-card.component';

import { ServiceRecordCardComponent } from './ServiceRecord-card/ServiceRecord-card.component';

import { TripCardComponent } from './Trip-card/Trip-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserVehicleCardComponent } from './UserVehicle-card/UserVehicle-card.component';

import { VehicleCardComponent } from './Vehicle-card/Vehicle-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Alert', name: 'ALERT', icon: 'view_list', route: '/main/Alert' }
    
        ,{ id: 'Checkpoint', name: 'CHECKPOINT', icon: 'view_list', route: '/main/Checkpoint' }
    
        ,{ id: 'Driver', name: 'DRIVER', icon: 'view_list', route: '/main/Driver' }
    
        ,{ id: 'GpsDatum', name: 'GPSDATUM', icon: 'view_list', route: '/main/GpsDatum' }
    
        ,{ id: 'Location', name: 'LOCATION', icon: 'view_list', route: '/main/Location' }
    
        ,{ id: 'MaintenanceSchedule', name: 'MAINTENANCESCHEDULE', icon: 'view_list', route: '/main/MaintenanceSchedule' }
    
        ,{ id: 'Route', name: 'ROUTE', icon: 'view_list', route: '/main/Route' }
    
        ,{ id: 'ServiceRecord', name: 'SERVICERECORD', icon: 'view_list', route: '/main/ServiceRecord' }
    
        ,{ id: 'Trip', name: 'TRIP', icon: 'view_list', route: '/main/Trip' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserVehicle', name: 'USERVEHICLE', icon: 'view_list', route: '/main/UserVehicle' }
    
        ,{ id: 'Vehicle', name: 'VEHICLE', icon: 'view_list', route: '/main/Vehicle' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AlertCardComponent

    ,CheckpointCardComponent

    ,DriverCardComponent

    ,GpsDatumCardComponent

    ,LocationCardComponent

    ,MaintenanceScheduleCardComponent

    ,RouteCardComponent

    ,ServiceRecordCardComponent

    ,TripCardComponent

    ,UserCardComponent

    ,UserVehicleCardComponent

    ,VehicleCardComponent

];