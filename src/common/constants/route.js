const eventRoute = '/event';

export const routeConstants = {
    default: '/',
    event: {
        list: `${eventRoute}/list`,
        view: `${eventRoute}`,
        viewWithParams: `${eventRoute}/:id`,
    }
};