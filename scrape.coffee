#!/usr/bin/env coffee

request = require 'request'
cheerio = require 'cheerio'
async = require 'async'

root = "http://www.daysofwonder.com/memoir44/en/content/cards_compendium/?id=cards_compendium"

categories = []

fetchImages = (card, callback) ->
  console.warn "Fetching card #{card.name}..."
  request card.url, (err, response, html) ->
    $ = cheerio.load html
    card.imageUrl = $('h2 + div img').attr('src')
    callback err

fetchCards = (category, callback) ->
  console.warn "Fetching #{category.name}..."
  request category.url, (err, response, html) ->
    if !err && response.statusCode == 200
      $ = cheerio.load html
      category.cards = []
      $('ol li a').each (i, element) ->
        card =
          name: $(this).text()
          url: "http://www.daysofwonder.com#{$(this).attr('href')}"
        category.cards.push card
      async.each category.cards, fetchImages, (err) ->
        callback(err)
    else
      console.log "ERROR2", err
      callback(err)

request root, (err, response, html) ->
  if !err && response.statusCode == 200
    # load category index
    $ = cheerio.load html
    $('ol li a').each (i, elem) ->
      category =
        name: $(this).text()
        url: "http://www.daysofwonder.com#{$(this).attr('href')}"
      categories.push category

    # for each category, fetch card index
    async.each categories, fetchCards, (err) ->
      console.log "ERROR1", err if err
      console.log JSON.stringify categories, null, " "
