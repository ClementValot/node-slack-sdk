/* tslint:disable */
import { WebAPICallResult } from '../WebClient';
export type ChannelsInfoResponse = WebAPICallResult & {
  ok?:       boolean;
  channel?:  Channel;
  error?:    string;
  needed?:   string;
  provided?: string;
};

export interface Channel {
  id?:                   string;
  name?:                 string;
  is_channel?:           boolean;
  created?:              number;
  is_archived?:          boolean;
  is_general?:           boolean;
  unlinked?:             number;
  creator?:              string;
  name_normalized?:      string;
  is_shared?:            boolean;
  is_org_shared?:        boolean;
  is_member?:            boolean;
  is_private?:           boolean;
  is_mpim?:              boolean;
  last_read?:            string;
  latest?:               Latest;
  unread_count?:         number;
  unread_count_display?: number;
  members?:              string[];
  topic?:                Purpose;
  purpose?:              Purpose;
  previous_names?:       string[];
}

export interface Latest {
  type?:           string;
  text?:           string;
  files?:          File[];
  upload?:         boolean;
  user?:           string;
  display_as_bot?: boolean;
  ts?:             string;
  subtype?:        string;
  username?:       string;
  bot_id?:         string;
  blocks?:         Block[];
  x_files?:        string[];
  attachments?:    Attachment[];
  edited?:         Edited;
}

export interface Attachment {
  msg_subtype?:           string;
  fallback?:              string;
  callback_id?:           string;
  color?:                 string;
  pretext?:               string;
  service_url?:           string;
  service_name?:          string;
  service_icon?:          string;
  author_name?:           string;
  author_link?:           string;
  author_icon?:           string;
  from_url?:              string;
  original_url?:          string;
  author_subname?:        string;
  channel_id?:            string;
  channel_name?:          string;
  id?:                    number;
  bot_id?:                string;
  indent?:                boolean;
  is_msg_unfurl?:         boolean;
  is_reply_unfurl?:       boolean;
  is_thread_root_unfurl?: boolean;
  is_app_unfurl?:         boolean;
  app_unfurl_url?:        string;
  title?:                 string;
  title_link?:            string;
  text?:                  string;
  fields?:                Field[];
  image_url?:             string;
  image_width?:           number;
  image_height?:          number;
  image_bytes?:           number;
  thumb_url?:             string;
  thumb_width?:           number;
  thumb_height?:          number;
  video_html?:            string;
  video_html_width?:      number;
  video_html_height?:     number;
  footer?:                string;
  footer_icon?:           string;
  ts?:                    string;
  mrkdwn_in?:             string[];
  actions?:               Action[];
  filename?:              string;
  size?:                  number;
  mimetype?:              string;
  url?:                   string;
  metadata?:              Metadata;
}

export interface Action {
  id?:               string;
  name?:             string;
  text?:             string;
  style?:            string;
  type?:             string;
  value?:            string;
  confirm?:          ActionConfirm;
  options?:          Option[];
  selected_options?: Option[];
  data_source?:      string;
  min_query_length?: number;
  option_groups?:    OptionGroup[];
  url?:              string;
}

export interface ActionConfirm {
  title?:        string;
  text?:         string;
  ok_text?:      string;
  dismiss_text?: string;
}

export interface OptionGroup {
  text?: string;
}

export interface Option {
  text?:  string;
  value?: string;
}

export interface Field {
  title?: string;
  value?: string;
  short?: boolean;
}

export interface Metadata {
  thumb_64?:    boolean;
  thumb_80?:    boolean;
  thumb_160?:   boolean;
  original_w?:  number;
  original_h?:  number;
  thumb_360_w?: number;
  thumb_360_h?: number;
  format?:      string;
  extension?:   string;
  rotation?:    number;
  thumb_tiny?:  string;
}

export interface Block {
  type?:         string;
  block_id?:     string;
  text?:         Text;
  accessory?:    Accessory;
  elements?:     Element[];
  fallback?:     string;
  image_url?:    string;
  image_width?:  number;
  image_height?: number;
  image_bytes?:  number;
  alt_text?:     string;
  title?:        Text;
  fields?:       Text[];
}

export interface Accessory {
  fallback?:     string;
  image_url?:    string;
  image_width?:  number;
  image_height?: number;
  image_bytes?:  number;
  type?:         string;
  alt_text?:     string;
}

export interface Element {
  type?:                 string;
  action_id?:            string;
  text?:                 Text;
  value?:                string;
  url?:                  string;
  style?:                string;
  confirm?:              ElementConfirm;
  placeholder?:          Text;
  initial_channel?:      string;
  initial_conversation?: string;
  initial_date?:         string;
  initial_option?:       InitialOption;
  min_query_length?:     number;
  image_url?:            string;
  alt_text?:             string;
  fallback?:             string;
  image_width?:          number;
  image_height?:         number;
  image_bytes?:          number;
  initial_user?:         string;
}

export interface ElementConfirm {
  title?:   Text;
  text?:    Text;
  confirm?: Text;
  deny?:    Text;
}

export interface Text {
  type?:     string;
  text?:     string;
  emoji?:    boolean;
  verbatim?: boolean;
}

export interface InitialOption {
  text?:        Text;
  value?:       string;
  description?: Text;
  url?:         string;
}

export interface Edited {
  user?: string;
  ts?:   string;
}

export interface File {
  id?:                   string;
  created?:              number;
  timestamp?:            number;
  name?:                 string;
  title?:                string;
  mimetype?:             string;
  filetype?:             string;
  pretty_type?:          string;
  user?:                 string;
  editable?:             boolean;
  size?:                 number;
  mode?:                 string;
  is_external?:          boolean;
  external_type?:        string;
  is_public?:            boolean;
  public_url_shared?:    boolean;
  display_as_bot?:       boolean;
  username?:             string;
  url_private?:          string;
  url_private_download?: string;
  permalink?:            string;
  permalink_public?:     string;
  edit_link?:            string;
  preview?:              string;
  preview_highlight?:    string;
  lines?:                number;
  lines_more?:           number;
  preview_is_truncated?: boolean;
  is_starred?:           boolean;
  has_rich_preview?:     boolean;
}

export interface Purpose {
  value?:    string;
  creator?:  string;
  last_set?: number;
}
