console.log('learn yewww kr')

$('#show-all').on('click', () => {
  $.ajax({
    method: 'GET',
    url: 'http://127.0.0.1:1337/phrases'
  })
  .done((phrases) => {
    renderPhrases(phrases)
  })
})

$('#submit-phrase').on('click', () => {
  let phrase = {
    korean: $('#korean-phrase').val(),
    english: $('#english-phrase').val()
  }
  $.ajax({
    method: 'POST',
    url: 'http://127.0.0.1:1337/phrases',
    data: JSON.stringify(phrase)
  })
  .done(() => {
    console.log(`${phrase.korean} has been added to the list`)
    $('#korean-phrase').val('')
    $('#english-phrase').val('')
  })
})

function renderPhrases(phrases) {
  $('#phrases').html('')
  phrases.forEach((phrase) => {
    renderPhrase(phrase)
  })
}

function renderPhrase(phrase) {
  var $el = $('<div class="phrase"></div>')
  $el.text(`English: ${phrase.english} || Korean: ${phrase.korean}`)
  $('#phrases').append($el)
}
