import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export const fetchListData = query => {
    return request({
        url: './list.json',
        method: 'GET',
        params: query
    })
}

export const fetchCollectData = () => {
    return request({
        url: './collect.json',
        method: 'GET',
        params: {}
    })
}

export const fetchReturnData = () => {
    return request({
        url: './return.json',
        method: 'GET',
        params: {}
    })
}

export const fetchRepairData = () => {
    return request({
        url: '/repair.json',
        method: 'GET',
        params: {}
    })
}

export const fetchScrapData = () => {
    return request({
        url: '/scrap.json',
        method: 'GET',
        params: {}
    })
}