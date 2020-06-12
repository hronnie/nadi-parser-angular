export class StudentColumns {

    static columns: any;

    static generateColumns(): any {
        return [
            {
                prop: 'name',
                name: 'name',
                headerName: 'Név',
                width: 150,
                sortable: true,
                draggable: true,
                resizeable: true,
                canAutoResize: false,
                visible: true,
            },
            {
                prop: 'postalCode',
                name: 'postalCode',
                headerName: 'Irányító szám',
                width: 150,
                sortable: true,
                draggable: true,
                resizeable: true,
                canAutoResize: false,
                visible: true,
            },
            {
                prop: 'city',
                name: 'city',
                headerName: 'Város',
                width: 250,
                sortable: true,
                draggable: true,
                resizeable: true,
                canAutoResize: false,
                visible: true,
            },
        ];
    }
}
