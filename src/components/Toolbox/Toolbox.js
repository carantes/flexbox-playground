import React from 'react';
import style from './Toolbox.module.css'
import { Select, Tooltip, Input } from 'antd';
const Option = Select.Option;
const InputGroup = Input.Group;

const ToolTipItem = ({ text, children }) => (
  <Tooltip
    trigger={['hover']}
    title={text}
    placement="topLeft"
    overlayClassName="numeric-input"
  >
    { children }
  </Tooltip>
);

const PropertyItemContainer = ({ name, options, onChange, tooltipText, value }) => (
  <InputGroup compact>
    <ToolTipItem text={tooltipText} >
      <Input style={{ width: '50%' }} defaultValue={name} />
    </ToolTipItem>
    <Select
      showSearch
      style={{ width: '50%' }}
      placeholder={name}
      optionFilterProp="children"
      onChange={(newValue) => onChange(name, newValue)}
      onFocus={() => console.log('focus')}
      onBlur={() => console.log('blur')}
      value={value}
      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
      {
        options.map(({value}, i) => (
          <Option key={i} value={value}>{value}</Option>
        ))
      }      
    </Select>

  </InputGroup>
);

const Toolbox = ({ items, onChange }) => (
  <div className={style.toolbox} >
    {
      items.map(({name, description, options, value}, i) =>
        <PropertyItemContainer key={i} name={name} options={options} value={value} tooltipText={description} onChange={onChange} />
      )
    }
  </div>
)

export default Toolbox;