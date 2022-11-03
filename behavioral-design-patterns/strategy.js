/**
 * The strategy pattern is a behavioral software design pattern that enables selecting 
 * an algorithm at runtime. Instead of implementing a single algorithm directly, code 
 * receives run-time instructions as to which in a family of algorithms to use.
 */

const outputFormat = Object.freeze({
  markdown: 0,
  html: 1
})

class ListStrategy {
  start (buffer) {}
  end (buffer) {}
  addListItem (buffer, item) {}
}

class MarkdownListStrategy extends ListStrategy {
  addListItem (buffer, item) {
    buffer.push (` * ${item}`)
  }
}

class HtmlListStrategy extends ListStrategy {
  start (buffer) {
    buffer.push('<ul>')
  }

  end (buffer) {
    buffer.push('</ul>')
  }

  addListItem (buffer, item) {
    buffer.push(`  <li>${item}</li>`)
  }
}

class TextProcessor {
  constructor (outputFormat) {
    this.buffer = []
    this.setOutputFormat(outputFormat)
  }

  setOutputFormat (format) {
    switch (format) {
      case outputFormat.markdown:
        this.listStrategy = new MarkdownListStrategy()
        break
      case outputFormat.html:
        this.listStrategy = new HtmlListStrategy()
        break
    }
  }

  appendList (items) {
    this.listStrategy.start(this.buffer)
    for (let item of items) {
      this.listStrategy.addListItem(this.buffer, item)
    }
    this.listStrategy.end(this.buffer)
  }

  clear () {
    this.buffer = []
  }

  toString () {
    return this.buffer.join('\n')
  }
}

const tp = new TextProcessor()

tp.setOutputFormat(outputFormat.markdown)
tp.appendList(['one', 'two', 'three'])
console.log(tp.toString())

tp.clear()
tp.setOutputFormat(outputFormat.html)
tp.appendList(['one', 'two', 'three'])
console.log(tp.toString())