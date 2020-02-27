/**
 * Updated by Tw93 on 2019-12-07.
 * 单选组件
 */

import { Radio } from 'antd';
import radioHoc from '../../components/radioHoc';

const radioComponentMap = {
  'button': Radio.Button,
  'default': Radio
}

export default function radio(p) {
  const { radioType = 'default' } = p.schema || {};
  const onChange = e => p.onChange(p.name, e.target.value);
  return radioHoc(p, onChange, radioComponentMap[radioType]);
}
