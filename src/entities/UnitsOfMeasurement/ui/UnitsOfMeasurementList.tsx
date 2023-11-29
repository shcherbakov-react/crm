import { Table } from 'shared/ui/Table/Table';
import { UnitsOfMeasurementColumns, UnitsOfMeasurementData } from 'entities/UnitsOfMeasurement';

export const UnitsOfMeasurementList = () => {
    return <Table data={UnitsOfMeasurementData} columns={UnitsOfMeasurementColumns} />;
};
