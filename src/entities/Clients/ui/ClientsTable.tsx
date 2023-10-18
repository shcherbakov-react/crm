import {Table} from 'shared/ui/Table/Table';
import {ClientsColumns, GetClients} from "pages/ManualClientsPage/api/GetClients";
import {Link} from "react-router-dom";
import AddImage from "shared/assets/icons/add.svg";

export const ClientsTable = () => {

    return (
        <>
            <div>
                <Link to={'/manual/clients/add'}>
                    <AddImage/>
                </Link>
            </div>
            <Table data={GetClients} columns={ClientsColumns}/>
        </>
    )
}