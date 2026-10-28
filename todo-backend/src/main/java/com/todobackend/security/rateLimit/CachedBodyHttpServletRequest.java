package com.todobackend.security.rateLimit;

import jakarta.servlet.ReadListener;
import jakarta.servlet.ServletInputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

public class CachedBodyHttpServletRequest extends HttpServletRequestWrapper {

    private final byte[] cachedBody;

    public CachedBodyHttpServletRequest(HttpServletRequest request, int maxBytes) throws IOException {
        super(request);
        this.cachedBody = request.getInputStream().readNBytes(maxBytes + 1);
        if (cachedBody.length > maxBytes) {
            throw new IOException("Request body exceeds " + maxBytes + " bytes");
        }
    }

    @Override
    public int getContentLength() {
        return cachedBody.length;
    }

    @Override
    public long getContentLengthLong() {
        return cachedBody.length;
    }

    @Override
    public ServletInputStream getInputStream() {
        return new CachedBodyServletInputStream(cachedBody);
    }

    @Override
    public BufferedReader getReader() {
        String encoding = getCharacterEncoding();
        Charset charset = encoding != null ? Charset.forName(encoding) : StandardCharsets.UTF_8;
        return new BufferedReader(new InputStreamReader(getInputStream(), charset));
    }

    private static class CachedBodyServletInputStream extends ServletInputStream {

        private final ByteArrayInputStream buffer;

        CachedBodyServletInputStream(byte[] body) {
            this.buffer = new ByteArrayInputStream(body);
        }

        @Override
        public boolean isFinished() {
            return buffer.available() == 0;
        }

        @Override
        public boolean isReady() {
            return true;
        }

        @Override
        public void setReadListener(ReadListener readListener) {
        }

        @Override
        public int read() {
            return buffer.read();
        }

        @Override
        public int read(byte[] b, int off, int len) {
            return buffer.read(b, off, len);
        }

        @Override
        public int available() {
            return buffer.available();
        }
    }
}