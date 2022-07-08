/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type StarsListResponse = WebAPICallResult & {
  error?:    string;
  items?:    Item[];
  needed?:   string;
  ok?:       boolean;
  paging?:   Paging;
  provided?: string;
};

export interface Item {
  channel?:     string;
  comment?:     Comment;
  date_create?: number;
  file?:        ItemFile;
  message?:     Message;
  type?:        string;
}

export interface Comment {
  channel?:    string;
  comment?:    string;
  created?:    number;
  id?:         string;
  is_intro?:   boolean;
  is_starred?: boolean;
  num_stars?:  number;
  timestamp?:  number;
  user?:       string;
}

export interface ItemFile {
  app_id?:                    string;
  app_name?:                  string;
  bot_id?:                    string;
  cc?:                        Cc[];
  channel_actions_count?:     number;
  channel_actions_ts?:        string;
  channels?:                  string[];
  comments_count?:            number;
  converted_pdf?:             string;
  created?:                   number;
  deanimate?:                 string;
  deanimate_gif?:             string;
  display_as_bot?:            boolean;
  duration_ms?:               number;
  edit_link?:                 string;
  editable?:                  boolean;
  editor?:                    string;
  external_id?:               string;
  external_type?:             string;
  external_url?:              string;
  filetype?:                  string;
  from?:                      Cc[];
  groups?:                    string[];
  has_more?:                  boolean;
  has_rich_preview?:          boolean;
  headers?:                   Headers;
  hls?:                       string;
  hls_embed?:                 string;
  id?:                        string;
  image_exif_rotation?:       number;
  ims?:                       string[];
  initial_comment?:           Comment;
  is_external?:               boolean;
  is_public?:                 boolean;
  is_starred?:                boolean;
  last_editor?:               string;
  lines?:                     number;
  lines_more?:                number;
  media_display_type?:        string;
  mimetype?:                  string;
  mode?:                      string;
  mp4?:                       string;
  name?:                      string;
  non_owner_editable?:        boolean;
  num_stars?:                 number;
  original_attachment_count?: number;
  original_h?:                string;
  original_w?:                string;
  permalink?:                 string;
  permalink_public?:          string;
  pinned_to?:                 string[];
  pjpeg?:                     string;
  plain_text?:                string;
  pretty_type?:               string;
  preview?:                   string;
  preview_highlight?:         string;
  preview_is_truncated?:      boolean;
  preview_plain_text?:        string;
  public_url_shared?:         boolean;
  reactions?:                 Reaction[];
  sent_to_self?:              boolean;
  shares?:                    Shares;
  simplified_html?:           string;
  size?:                      number;
  subject?:                   string;
  subtype?:                   string;
  thumb_1024?:                string;
  thumb_1024_gif?:            string;
  thumb_1024_h?:              string;
  thumb_1024_w?:              string;
  thumb_160?:                 string;
  thumb_160_gif?:             string;
  thumb_160_h?:               string;
  thumb_160_w?:               string;
  thumb_360?:                 string;
  thumb_360_gif?:             string;
  thumb_360_h?:               string;
  thumb_360_w?:               string;
  thumb_480?:                 string;
  thumb_480_gif?:             string;
  thumb_480_h?:               string;
  thumb_480_w?:               string;
  thumb_64?:                  string;
  thumb_64_gif?:              string;
  thumb_64_h?:                string;
  thumb_64_w?:                string;
  thumb_720?:                 string;
  thumb_720_gif?:             string;
  thumb_720_h?:               string;
  thumb_720_w?:               string;
  thumb_80?:                  string;
  thumb_800?:                 string;
  thumb_800_gif?:             string;
  thumb_800_h?:               string;
  thumb_800_w?:               string;
  thumb_80_gif?:              string;
  thumb_80_h?:                string;
  thumb_80_w?:                string;
  thumb_960?:                 string;
  thumb_960_gif?:             string;
  thumb_960_h?:               string;
  thumb_960_w?:               string;
  thumb_gif?:                 string;
  thumb_pdf?:                 string;
  thumb_pdf_h?:               string;
  thumb_pdf_w?:               string;
  thumb_tiny?:                string;
  thumb_video?:               string;
  thumb_video_h?:             number;
  thumb_video_w?:             number;
  timestamp?:                 number;
  title?:                     string;
  to?:                        Cc[];
  transcription?:             Transcription;
  updated?:                   number;
  url_private?:               string;
  url_private_download?:      string;
  user?:                      string;
  username?:                  string;
  vtt?:                       string;
}

export interface Cc {
  address?:  string;
  name?:     string;
  original?: string;
}

export interface Headers {
  date?:        string;
  in_reply_to?: string;
  message_id?:  string;
  reply_to?:    string;
}

export interface Reaction {
  count?: number;
  name?:  string;
  url?:   string;
  users?: string[];
}

export interface Shares {
  private?: { [key: string]: Private[] };
  public?:  { [key: string]: Private[] };
}

export interface Private {
  channel_name?:      string;
  latest_reply?:      string;
  reply_count?:       number;
  reply_users?:       string[];
  reply_users_count?: number;
  share_user_id?:     string;
  team_id?:           string;
  thread_ts?:         string;
  ts?:                string;
}

export interface Transcription {
  locale?: string;
  status?: string;
}

export interface Message {
  attachments?:       Attachment[];
  blocks?:            Block[];
  bot_id?:            string;
  bot_profile?:       BotProfile;
  client_msg_id?:     string;
  display_as_bot?:    boolean;
  edited?:            Edited;
  files?:             FileElement[];
  inviter?:           string;
  is_locked?:         boolean;
  is_starred?:        boolean;
  last_read?:         string;
  latest_reply?:      string;
  permalink?:         string;
  reactions?:         Reaction[];
  reply_count?:       number;
  reply_users?:       string[];
  reply_users_count?: number;
  subscribed?:        boolean;
  subtype?:           string;
  team?:              string;
  text?:              string;
  thread_ts?:         string;
  ts?:                string;
  type?:              string;
  upload?:            boolean;
  user?:              string;
  username?:          string;
}

export interface Attachment {
  actions?:               Action[];
  app_id?:                string;
  app_unfurl_url?:        string;
  author_icon?:           string;
  author_id?:             string;
  author_link?:           string;
  author_name?:           string;
  author_subname?:        string;
  blocks?:                Block[];
  bot_id?:                string;
  callback_id?:           string;
  channel_id?:            string;
  channel_name?:          string;
  color?:                 string;
  fallback?:              string;
  fields?:                Field[];
  filename?:              string;
  files?:                 FileElement[];
  footer?:                string;
  footer_icon?:           string;
  from_url?:              string;
  id?:                    number;
  image_bytes?:           number;
  image_height?:          number;
  image_url?:             string;
  image_width?:           number;
  indent?:                boolean;
  is_app_unfurl?:         boolean;
  is_msg_unfurl?:         boolean;
  is_reply_unfurl?:       boolean;
  is_thread_root_unfurl?: boolean;
  metadata?:              Metadata;
  mimetype?:              string;
  mrkdwn_in?:             string[];
  msg_subtype?:           string;
  original_url?:          string;
  pretext?:               string;
  preview?:               Preview;
  service_icon?:          string;
  service_name?:          string;
  service_url?:           string;
  size?:                  number;
  text?:                  string;
  thumb_height?:          number;
  thumb_url?:             string;
  thumb_width?:           number;
  title?:                 string;
  title_link?:            string;
  ts?:                    string;
  url?:                   string;
  video_html?:            string;
  video_html_height?:     number;
  video_html_width?:      number;
  video_url?:             string;
}

export interface Action {
  confirm?:          ActionConfirm;
  data_source?:      string;
  id?:               string;
  min_query_length?: number;
  name?:             string;
  option_groups?:    ActionOptionGroup[];
  options?:          SelectedOptionElement[];
  selected_options?: SelectedOptionElement[];
  style?:            string;
  text?:             string;
  type?:             string;
  url?:              string;
  value?:            string;
}

export interface ActionConfirm {
  dismiss_text?: string;
  ok_text?:      string;
  text?:         string;
  title?:        string;
}

export interface ActionOptionGroup {
  options?: SelectedOptionElement[];
  text?:    string;
}

export interface SelectedOptionElement {
  text?:  string;
  value?: string;
}

export interface Block {
  accessory?:                Accessory;
  alt_text?:                 string;
  api_decoration_available?: boolean;
  block_id?:                 string;
  call?:                     Call;
  call_id?:                  string;
  dispatch_action?:          boolean;
  element?:                  Accessory;
  elements?:                 Accessory[];
  external_id?:              string;
  fallback?:                 string;
  fields?:                   Hint[];
  file?:                     ItemFile;
  file_id?:                  string;
  hint?:                     Hint;
  image_bytes?:              number;
  image_height?:             number;
  image_url?:                string;
  image_width?:              number;
  label?:                    Hint;
  optional?:                 boolean;
  source?:                   string;
  text?:                     Hint;
  title?:                    Hint;
  type?:                     string;
}

export interface Accessory {
  accessibility_label?:             string;
  action_id?:                       string;
  alt_text?:                        string;
  confirm?:                         AccessoryConfirm;
  default_to_current_conversation?: boolean;
  elements?:                        AccessoryElement[];
  fallback?:                        string;
  filter?:                          Filter;
  focus_on_load?:                   boolean;
  image_bytes?:                     number;
  image_height?:                    number;
  image_url?:                       string;
  image_width?:                     number;
  indent?:                          number;
  initial_channel?:                 string;
  initial_channels?:                string[];
  initial_conversation?:            string;
  initial_conversations?:           string[];
  initial_date?:                    string;
  initial_option?:                  InitialOptionElement;
  initial_options?:                 InitialOptionElement[];
  initial_time?:                    string;
  initial_user?:                    string;
  initial_users?:                   string[];
  max_selected_items?:              number;
  min_query_length?:                number;
  option_groups?:                   AccessoryOptionGroup[];
  options?:                         InitialOptionElement[];
  placeholder?:                     Hint;
  response_url_enabled?:            boolean;
  style?:                           string;
  text?:                            Hint;
  timezone?:                        string;
  type?:                            string;
  url?:                             string;
  value?:                           string;
}

export interface AccessoryConfirm {
  confirm?: Hint;
  deny?:    Hint;
  style?:   string;
  text?:    Hint;
  title?:   Hint;
}

export interface Hint {
  emoji?:    boolean;
  text?:     string;
  type?:     string;
  verbatim?: boolean;
}

export interface AccessoryElement {
  elements?: PurpleElement[];
  indent?:   number;
  style?:    string;
  type?:     string;
}

export interface PurpleElement {
  channel_id?:   string;
  name?:         string;
  range?:        string;
  skin_tone?:    number;
  style?:        Style;
  team_id?:      string;
  text?:         string;
  timestamp?:    string;
  type?:         string;
  unicode?:      string;
  url?:          string;
  user_id?:      string;
  usergroup_id?: string;
  value?:        string;
}

export interface Style {
  bold?:   boolean;
  code?:   boolean;
  italic?: boolean;
  strike?: boolean;
}

export interface Filter {
  exclude_bot_users?:                boolean;
  exclude_external_shared_channels?: boolean;
  include?:                          string[];
}

export interface InitialOptionElement {
  description?: Hint;
  text?:        Hint;
  url?:         string;
  value?:       string;
}

export interface AccessoryOptionGroup {
  label?:   Hint;
  options?: InitialOptionElement[];
}

export interface Call {
  media_backend_type?: string;
  v1?:                 V1;
}

export interface V1 {
  active_participants?:  Participant[];
  all_participants?:     Participant[];
  app_icon_urls?:        AppIconUrls;
  app_id?:               string;
  channels?:             string[];
  created_by?:           string;
  date_end?:             number;
  date_start?:           number;
  desktop_app_join_url?: string;
  display_id?:           string;
  has_ended?:            boolean;
  id?:                   string;
  is_dm_call?:           boolean;
  join_url?:             string;
  name?:                 string;
  was_accepted?:         boolean;
  was_missed?:           boolean;
  was_rejected?:         boolean;
}

export interface Participant {
  avatar_url?:   string;
  display_name?: string;
  external_id?:  string;
  slack_id?:     string;
}

export interface AppIconUrls {
  image_1024?:     string;
  image_128?:      string;
  image_192?:      string;
  image_32?:       string;
  image_36?:       string;
  image_48?:       string;
  image_512?:      string;
  image_64?:       string;
  image_72?:       string;
  image_96?:       string;
  image_original?: string;
}

export interface Field {
  short?: boolean;
  title?: string;
  value?: string;
}

export interface FileElement {
  app_id?:                    string;
  app_name?:                  string;
  bot_id?:                    string;
  cc?:                        Cc[];
  channel_actions_count?:     number;
  channel_actions_ts?:        string;
  channels?:                  string[];
  comments_count?:            number;
  converted_pdf?:             string;
  created?:                   number;
  deanimate?:                 string;
  deanimate_gif?:             string;
  display_as_bot?:            boolean;
  duration_ms?:               number;
  edit_link?:                 string;
  editable?:                  boolean;
  editor?:                    string;
  external_id?:               string;
  external_type?:             string;
  external_url?:              string;
  filetype?:                  string;
  from?:                      Cc[];
  groups?:                    string[];
  has_more?:                  boolean;
  has_rich_preview?:          boolean;
  headers?:                   Headers;
  hls?:                       string;
  hls_embed?:                 string;
  id?:                        string;
  image_exif_rotation?:       number;
  ims?:                       string[];
  initial_comment?:           Comment;
  is_external?:               boolean;
  is_public?:                 boolean;
  is_starred?:                boolean;
  last_editor?:               string;
  lines?:                     number;
  lines_more?:                number;
  media_display_type?:        string;
  mimetype?:                  string;
  mode?:                      string;
  mp4?:                       string;
  name?:                      string;
  non_owner_editable?:        boolean;
  num_stars?:                 number;
  original_attachment_count?: number;
  original_h?:                string;
  original_w?:                string;
  permalink?:                 string;
  permalink_public?:          string;
  pinned_to?:                 string[];
  pjpeg?:                     string;
  plain_text?:                string;
  pretty_type?:               string;
  preview?:                   string;
  preview_highlight?:         string;
  preview_is_truncated?:      boolean;
  preview_plain_text?:        string;
  public_url_shared?:         boolean;
  reactions?:                 Reaction[];
  sent_to_self?:              boolean;
  shares?:                    Shares;
  simplified_html?:           string;
  size?:                      number;
  subject?:                   string;
  subtype?:                   string;
  thumb_1024?:                string;
  thumb_1024_gif?:            string;
  thumb_1024_h?:              string;
  thumb_1024_w?:              string;
  thumb_160?:                 string;
  thumb_160_gif?:             string;
  thumb_160_h?:               string;
  thumb_160_w?:               string;
  thumb_360?:                 string;
  thumb_360_gif?:             string;
  thumb_360_h?:               string;
  thumb_360_w?:               string;
  thumb_480?:                 string;
  thumb_480_gif?:             string;
  thumb_480_h?:               string;
  thumb_480_w?:               string;
  thumb_64?:                  string;
  thumb_64_gif?:              string;
  thumb_64_h?:                string;
  thumb_64_w?:                string;
  thumb_720?:                 string;
  thumb_720_gif?:             string;
  thumb_720_h?:               string;
  thumb_720_w?:               string;
  thumb_80?:                  string;
  thumb_800?:                 string;
  thumb_800_gif?:             string;
  thumb_800_h?:               string;
  thumb_800_w?:               string;
  thumb_80_gif?:              string;
  thumb_80_h?:                string;
  thumb_80_w?:                string;
  thumb_960?:                 string;
  thumb_960_gif?:             string;
  thumb_960_h?:               string;
  thumb_960_w?:               string;
  thumb_gif?:                 string;
  thumb_pdf?:                 string;
  thumb_pdf_h?:               string;
  thumb_pdf_w?:               string;
  thumb_tiny?:                string;
  thumb_video?:               string;
  thumb_video_h?:             number;
  thumb_video_w?:             number;
  timestamp?:                 number;
  title?:                     string;
  to?:                        Cc[];
  transcription?:             Transcription;
  updated?:                   number;
  url_private?:               string;
  url_private_download?:      string;
  user?:                      string;
  username?:                  string;
  vtt?:                       string;
}

export interface Metadata {
  extension?:   string;
  format?:      string;
  original_h?:  number;
  original_w?:  number;
  rotation?:    number;
  thumb_160?:   boolean;
  thumb_360_h?: number;
  thumb_360_w?: number;
  thumb_64?:    boolean;
  thumb_80?:    boolean;
  thumb_tiny?:  string;
}

export interface Preview {
  can_remove?: boolean;
  icon_url?:   string;
  subtitle?:   Hint;
  title?:      Hint;
  type?:       string;
}

export interface BotProfile {
  app_id?:  string;
  deleted?: boolean;
  icons?:   Icons;
  id?:      string;
  name?:    string;
  team_id?: string;
  updated?: number;
}

export interface Icons {
  image_36?: string;
  image_48?: string;
  image_72?: string;
}

export interface Edited {
  ts?:   string;
  user?: string;
}

export interface Paging {
  page?:     number;
  pages?:    number;
  per_page?: number;
  spill?:    number;
  total?:    number;
}
