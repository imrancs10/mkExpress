const apiPrfix = "v1";
export const apiUrls = {
    authController: {
        getToken: `${apiPrfix}/auth/user/login`,
        changePassword: `${apiPrfix}/auth/user/change/password`,
        updateUserProfileImage: `${apiPrfix}/auth/user/update/profile/image`,
    },
    assignMemberController:{
        courierRunsheet:`${apiPrfix}/AssignMember/get/courier/runsheet`,
    },
    masterDataController: {
        add: `${apiPrfix}/masterData/master-data`,
        update: `${apiPrfix}/masterData/master-data`,
        delete: `${apiPrfix}/masterData/master-data/`,
        get: `${apiPrfix}/masterData/master-data/get/`,
        getAll: `${apiPrfix}/masterData/master-data`,
        search: `${apiPrfix}/masterData/master-data/search`,
        getByMasterDataType: `${apiPrfix}/masterData/master-data/get/by-type?masterDataType=`,
        getByMasterDataTypes: `${apiPrfix}/masterData/master-data/get/by-types`,
        addDataType: `${apiPrfix}/masterData/master-data-type`,
        updateDataType: `${apiPrfix}/masterData/master-data-type`,
        deleteDataType: `${apiPrfix}/masterData/master-data-type/`,
        getDataType: `${apiPrfix}/masterData/master-data-type/get/`,
        getAllDataType: `${apiPrfix}/masterData/master-data-type`,
        searchDataType: `${apiPrfix}/masterData/master-data-type/search`,
        addJourney: `${apiPrfix}/masterData/master-journey`,
        updatJourney: `${apiPrfix}/masterData/master-journey`,
        deleteJourney: `${apiPrfix}/masterData/master-journey/`,
        getJourney: `${apiPrfix}/masterData/master-journey/get/`,
        getAllJourney: `${apiPrfix}/masterData/master-journey`,
        searchJourney: `${apiPrfix}/masterData/master-journey/search`,
        getJourneyDropdown: `${apiPrfix}/masterData/master-journey/dropdown/journey`,
        addRole: `${apiPrfix}/masterData/master-role`,
        updateRole: `${apiPrfix}/masterData/master-role`,
        getShipmentStatusList: `${apiPrfix}/masterData/master-data/shipment/status/list`,
        deleteRole: `${apiPrfix}/masterData/master-role/`,
        getAllRole: `${apiPrfix}/masterData/master-role`,
        getByIdRole: `${apiPrfix}/masterData/master-role/get/`,
        searchRole: `${apiPrfix}/masterData/master-role/search`,
        addMenu: `${apiPrfix}/masterData/master-menu`,
        updateMenu: `${apiPrfix}/masterData/master-menu`,
        deleteMenu: `${apiPrfix}/masterData/master-menu/`,
        getAllMenu: `${apiPrfix}/masterData/master-menu`,
        getByIdMenu: `${apiPrfix}/masterData/master-menu/get/`,
        searchMenu: `${apiPrfix}/masterData/master-menu/search`,
        addRoleMenuMapper:`${apiPrfix}/masterData/master/menu/role/mapper/add`,
        getAllRoleMenuMapper:`${apiPrfix}/masterData/master/menu/role/mapper/get/all`,
        deleteRoleMenuMapperByRoleId:`${apiPrfix}/masterData/master/menu/role/mapper/delete/role`,
        deleteRoleMenuMapperById:`${apiPrfix}/masterData/master/menu/role/mapper/delete/`,
        getByIdRoleMenuMapper:`${apiPrfix}/masterData/master/menu/role/mapper/get/`,
        searchRoleMenuMapper:`${apiPrfix}/masterData/master/menu/role/mapper/search`,
    },
    customerController:{
        add: `${apiPrfix}/customer`,
        update: `${apiPrfix}/customer`,
        delete: `${apiPrfix}/customer/`,
        get: `${apiPrfix}/customer/get/`,
        getDropdown: `${apiPrfix}/customer/get/dropdown`,
        getAll: `${apiPrfix}/customer`,
        search: `${apiPrfix}/customer/search`,
        resetPassword:`${apiPrfix}/customer/reset/password/`,
        blockUnblocked:`${apiPrfix}/customer/blocked/unblocked/`
    },
    thirdPartyController:{
        add: `${apiPrfix}/thirdParty`,
        addThirdPartyShipment: `${apiPrfix}/thirdParty/add/shipments`,
        update: `${apiPrfix}/thirdParty`,
        delete: `${apiPrfix}/thirdParty/`,
        get: `${apiPrfix}/thirdParty/get/`,
        getAll: `${apiPrfix}/thirdParty`,
        search: `${apiPrfix}/thirdParty/search`,
    },
    logisticRegionController:{
        add: `${apiPrfix}/logisticRegion`,
        update: `${apiPrfix}/logisticRegion`,
        delete: `${apiPrfix}/logisticRegion/`,
        get: `${apiPrfix}/logisticRegion/get/`,
        getAll: `${apiPrfix}/logisticRegion`,
        search: `${apiPrfix}/logisticRegion/search`,
    },
    shipmentController:{
        create: `${apiPrfix}/shipment`,
        update: `${apiPrfix}/shipment`,
        search: `${apiPrfix}/shipment/search`,
        delete: `${apiPrfix}/shipment/`,
        get: `${apiPrfix}/shipment/get/`,
        getByIds: `${apiPrfix}/shipment/get/by-ids/`,
        getTrackingByShipmentId: `${apiPrfix}/shipment/get/tracking`,
        getAll: `${apiPrfix}/shipment`,
        search: `${apiPrfix}/shipment/search`,
        validateShipments: `${apiPrfix}/shipment/validate/`,
        assignForPickup:`${apiPrfix}/shipment/assign/pickup/`, 
        assignForDelivery:`${apiPrfix}/shipment/assign/delivery/`, 
        holdShipment:`${apiPrfix}/shipment/assign/hold`, 
        validateStatus:`${apiPrfix}/shipment/validate/status?shipmentNo=`,
        validateThirdPartyShipment: `${apiPrfix}/shipment/validate/thirdparty?shipmentNo=`,
    },
    memberController:{
        add: `${apiPrfix}/members`,
        update: `${apiPrfix}/members`,
        delete: `${apiPrfix}/members/`,
        get: `${apiPrfix}/members/get/`,
        getByRole: `${apiPrfix}/members/get/by-role`,
        getAll: `${apiPrfix}/members`,
        search: `${apiPrfix}/members/search`,
        activeDeactive: `${apiPrfix}/members/update/active/`,
        changeStation: `${apiPrfix}/members/update/station/`,
        changeRole: `${apiPrfix}/members/update/role/`,
        resetPassword: `${apiPrfix}/members/password/reset/`,
        changePassword: `${apiPrfix}/members/password/change`,
    },
    containerController:{
        add: `${apiPrfix}/containers`,
        addShipmentInContainer: `${apiPrfix}/containers/add/shipments/`,
        removeShipmentFromContainer: `${apiPrfix}/containers/remove/shipments/`,
        update: `${apiPrfix}/containers`,
        delete: `${apiPrfix}/containers/delete/`,
        get: `${apiPrfix}/containers/get/`,
        getAll: `${apiPrfix}/containers`,
        search: `${apiPrfix}/containers/search`,
        checkIn: `${apiPrfix}/containers/in/`,
        checkOut: `${apiPrfix}/containers/out/`,
        closeContainer: `${apiPrfix}/containers/close/`,
        getContainerJourney: `${apiPrfix}/containers/get/journey/`,
    },
    appSettingController:{
        create: `${apiPrfix}/appSetting`,
        update: `${apiPrfix}/appSetting`,
        delete: `${apiPrfix}/appSetting/`,
        get: `${apiPrfix}/appSetting/get/`,
        getAll: `${apiPrfix}/appSetting`,
        getAllGroup: `${apiPrfix}/appSetting/groups`,
        search: `${apiPrfix}/appSetting/search`,
    },
    dashboardController:{
        getShipmentCount:`${apiPrfix}/Dashboard/dashboard/status/count?`,
        getShipmentStatusWiseCount:`${apiPrfix}/Dashboard/dashboard/status/wise/count?`
    },
    systemActionController:{
        getAll:`${apiPrfix}/systemAction/system/action/get/all`
    }
}