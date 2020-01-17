import { showAlert } from './messages'
import $ from 'jquery'
import { v4 } from 'uuid'

import "./styles.scss";

document.getElementById('btn_alert')
  .addEventListener('click', showAlert);

  $('#btn_jq').click(() => alert(v4()));