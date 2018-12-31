import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { InputSwitch } from 'primereact/inputswitch';

import { fetchPosts } from '../store/actions/forumActions';
