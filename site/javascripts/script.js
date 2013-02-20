$(document).ready(function(){
  $('#tweet').tweet({
    username: 'opensourcenovel',
    join_text: 'auto',
    avatar_size: 32,
    count: 3,
    auto_join_text_default: "we said,", 
    auto_join_text_ed: "we",
    auto_join_text_ing: "we were",
    auto_join_text_reply: "we replied to",
    auto_join_text_url: " // ",
    loading_text: "loading tweets..."
  });
});
