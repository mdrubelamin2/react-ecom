import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.style.scss';

const CollectionPreview = props => (
  <div className='collection-preview'>
    <h1 className='title'>{props.title.toUpperCase()}</h1>
    <div className='preview'>
      {
        props.items.map((itm,i)=> i<4 && <CollectionItem key={`clc-${i}`} {...otherItemProps}/>)
        /* props.items.filter((item, index) => index < 4).map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        )) */
      }
    </div>
  </div>
);

export default CollectionPreview;