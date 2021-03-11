/* tslint:disable */
import { WebAPICallResult } from '../WebClient';
export type GroupsInviteResponse = WebAPICallResult & {
  ok?:                boolean;
  group?:             Group;
  warning?:           string;
  response_metadata?: ResponseMetadata;
  error?:             string;
  needed?:            string;
  provided?:          string;
};

export interface Group {
  id?:                   string;
  name?:                 string;
  is_group?:             boolean;
  created?:              number;
  creator?:              string;
  is_archived?:          boolean;
  name_normalized?:      string;
  is_mpim?:              boolean;
  is_open?:              boolean;
  last_read?:            string;
  latest?:               Latest;
  unread_count?:         number;
  unread_count_display?: number;
  topic?:                Purpose;
  purpose?:              Purpose;
  priority?:             number;
}

export interface Latest {
  type?:    string;
  subtype?: string;
  ts?:      string;
  user?:    string;
  text?:    string;
  topic?:   string;
}

export interface Purpose {
  value?:    string;
  creator?:  string;
  last_set?: number;
}

export interface ResponseMetadata {
  messages?: string[];
  warnings?: string[];
}
