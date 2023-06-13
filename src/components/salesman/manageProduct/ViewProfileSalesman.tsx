import Colors from 'modules/Colors'
import React from 'react'
import { InformationUser } from 'types/Types'

type Props = {
  record: InformationUser
}

const ViewProfileSalesman = ({ record }: Props) => {
  return (
    <>
      <a
        style={{
          color: Colors.blue,
        }}
      >
        {record.firstName} {record.lastName}
      </a>
    </>
  )
}

export default ViewProfileSalesman
