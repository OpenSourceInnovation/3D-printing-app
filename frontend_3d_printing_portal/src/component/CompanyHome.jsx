import stylecompanyhome from 'styles/Companyhome.module.css'
import { Table } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

function CompanyHome() {
  return (<>
    <div>
        <div className={stylecompanyhome.sperater}>MarketPlace</div>
    <Table
      aria-label="Example table with static content"
      css={{
        position: 'relative',
        top: '50%',
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>Image</Table.Column>
        <Table.Column>Details</Table.Column>
        <Table.Column>Action</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell><Image src="/sample_earth.jpg" width={190} height={290} alt="preview" /></Table.Cell>
          <Table.Cell>
            <div className={stylecompanyhome.details}>
                <h2 className={stylecompanyhome.name}>Earth 3d</h2>
                <label className={stylecompanyhome.detail}>This is a sample model of earth 3d</label>
                <div>Date: 27/01/2023 00:22:12</div>
            </div>
            </Table.Cell>
          <Table.Cell><Link className={stylecompanyhome.view} href='/company/company-home/earth-3d'>View</Link></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </div>
    </>
  );
}

export default CompanyHome;