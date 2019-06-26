---


---

<h1 id="contacts-list---simple-rest-api">Contacts list - Simple REST API</h1>
<p>This is a simple contacts list REST API.<br>
Built using Node/Express and MongoDB</p>
<p>Deployed to Heroku: <a href="https://contacts-rest-api.herokuapp.com/">https://contacts-rest-api.herokuapp.com</a></p>
<h1 id="end-points">End Points</h1>
<p>All end points are prefixed with <code>https://contacts-rest-api.herokuapp.com/api/v1</code></p>
<p>Get All Contacts</p>
<pre><code>GET /contacts
</code></pre>
<p>Get a Contact by Phone Number</p>
<pre><code>GET /contacts/:number
</code></pre>
<p>Create a new Contact</p>
<pre><code>POST /contacts
</code></pre>
<p>Update a Contact</p>
<pre><code>PUT /contacts/:number
</code></pre>
<p>Delete a Contact</p>
<pre><code>DELETE /contacts/:number
</code></pre>
<h1 id="parameters">Parameters</h1>
<p>Currently there are 2 support parameters.</p>
<pre><code>/contacts?firstname=&lt;first_name&gt;&amp;lastname=&lt;last_name&gt;
</code></pre>
<h1 id="schema">Schema</h1>
<pre><code>{
    firstname: String,
    lastname: String,
    number: {
        type: String,
        required: true,
        unique: true
    }
}
</code></pre>

