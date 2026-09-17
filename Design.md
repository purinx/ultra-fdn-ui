# Design.md

ダークトーン × ミントグリーン(teal)アクセントの、ハードウェア/プラグインライクなビジュアル言語を扱います。

## 1. デザインコンセプト

- **トーン**: 暗いグラファイト/チャコール系の筐体に、光るミントグリーンのアクセントを乗せたプロオーディオ機材の質感
- **立体感**: ノブやパネルにベベル（内側/外側シャドウ）を用いて、実機のような凹凸を表現する
- **情報階層**: モジュール名（ロゴ）を最も目立たせ、パラメータラベルは控えめなグレーで統一

## 2. デザイントークン

### 2.1 カラー

| トークン名 | 値 | 用途 |
|---|---|---|
| `color-bg-canvas` | `#15171a` | 画面全体の背景（最背面） |
| `color-bg-canvas-glow` | `radial-gradient(ellipse at 50% 30%, rgba(45,212,191,0.25), transparent 60%)` | 背景の波状ミントグロー装飾 |
| `color-panel-bg` | `linear-gradient(180deg, #3c3f3d 0%, #2c2e2c 100%)` | プラグイン本体パネルの背景 |
| `color-panel-border` | `rgba(255,255,255,0.06)` | パネル外周のハイライト境界線 |
| `color-panel-shadow` | `rgba(0,0,0,0.5)` | パネル外側のドロップシャドウ |
| `color-groupbox-border` | `rgba(94,234,212,0.35)` | Early Reflections等、グループ枠線 |
| `color-groupbox-label` | `#a9b0ac` | グループラベルテキスト |
| `color-knob-body-inner` | `#1c1d1c` | ノブ中心のダークグラデ始点 |
| `color-knob-body-outer` | `#3d3f3d` | ノブ外周のダークグラデ終点 |
| `color-knob-bezel` | `rgba(255,255,255,0.08)` | ノブ外周のハイライトリム |
| `color-accent-mint` | `#5eead4` | アクティブ値・インジケーター・メーター発光色 |
| `color-accent-mint-dim` | `rgba(94,234,212,0.25)` | 非アクティブ目盛・弱発光 |
| `color-accent-mint-glow` | `rgba(94,234,212,0.45)` | アクセント要素のbox-shadowグロー |
| `color-text-primary` | `#e8ebe9` | ロゴ・見出しテキスト |
| `color-text-secondary` | `#9aa19d` | パラメータラベル・サブテキスト |
| `color-text-muted` | `#6b716e` | 非活性・補助テキスト |
| `color-meter-fill-top` | `#99f6e4` | メーター上部（ピーク側） |
| `color-meter-fill-bottom` | `#0d9488` | メーター下部（低レベル側） |
| `color-meter-track` | `#232523` | メーター未点灯部分 |
| `color-control-bg` | `#26282a` | ボタン・プリセットフィールドの背景 |
| `color-control-border` | `rgba(255,255,255,0.08)` | ボタン・入力欄の境界線 |
| `color-divider` | `rgba(255,255,255,0.08)` | セクション区切りの罫線（Spectrum Analyzer下、Matrix行の上など） |
| `color-accent-amber` | `#f0b86e` | Matrix Weightsヒートマップの負の値 |
| `color-accent-amber-dim` | `rgba(240,184,110,0.25)` | アンバー系の弱発光 |
| `color-toggle-track-off` | `#26282a` | ToggleSwitchのOFFトラック |

### 2.2 タイポグラフィ

| トークン名 | 値 | 用途 |
|---|---|---|
| `font-family-display` | 幅広・幾何学的なサンセリフ（例: `"Barlow Condensed", "Oswald", sans-serif`） | モジュールロゴ |
| `font-family-ui` | 標準サンセリフ（例: `"Inter", "Helvetica Neue", sans-serif`） | ラベル・ボタン・本文 |
| `font-size-logo` | `28px` / `font-weight: 700` | モジュール名ロゴ |
| `font-size-logo-sub` | `10px` / `letter-spacing: 0.15em` / `text-transform: uppercase` | ロゴ下のサブタイトル |
| `font-size-label` | `11px` / `font-weight: 500` | ノブ下のパラメータ名 |
| `font-size-groupbox-label` | `10px` / `letter-spacing: 0.08em` / `text-transform: uppercase` | グループ枠のタイトル |
| `font-size-preset` | `13px` / `font-weight: 600` | プリセット名表示 |
| `font-size-button` | `11px` / `font-weight: 600` / `letter-spacing: 0.04em` | ボタンラベル |

### 2.3 スペーシング・サイズ

| トークン名 | 値 | 用途 |
|---|---|---|
| `space-panel-padding` | `24px`（実装は`p-6`） | パネル内側の余白 |
| `space-section-gap-x` | `32px` | パネル内の主要セクション間（横方向）の間隔。MatrixWeights⇔Spectrum Analyzer⇔メーター、Matrix設定⇔Loss表示など、性質の異なるセクション同士 |
| `space-section-gap-y` | `20px` | パネル内の主要セクション間（縦方向）の間隔。区切り線（Divider）を挟むブロック同士 |
| `space-knob-gap-inner` | `16px` | ひとまとまりのノブ群の中での横間隔（GroupBox内、Decay/Mixクラスタ内など） |
| `space-knob-row-gap-x` | `20px` | 「ツマミの段」内で、Decay/MixクラスタやGroupBox同士を並べる間隔（`space-section-gap-x`より狭く、同じ種類＝ノブ系コンポーネント同士を詰めて1行に収めるための専用トークン） |
| `space-groupbox-pad-top` | `20px` | GroupBoxの上パディング（ラベルが枠線に重なる分、下より広めに取る） |
| `space-groupbox-pad-x` | `12px` | GroupBoxの左右パディング |
| `space-groupbox-pad-bottom` | `16px` | GroupBoxの下パディング |
| `size-knob-lg` | `64px` | Decay/Mixなど主役パラメータ用ノブ直径 |
| `size-knob-md` | `56px` | 単体で使う場合の標準ノブ直径 |
| `size-knob-sm` | `48px` | GroupBox内など、ノブ数が多いクラスタ用の縮小ノブ直径 |
| `size-knob-label-height` | `28px` | ノブのラベル表示領域の**固定高さ**（後述） |
| `size-meter-width` | `10px` | レベルメーター幅 |
| `size-meter-height` | `160px` | レベルメーター高さ |
| `radius-panel` | `16px` | パネル本体の角丸 |
| `radius-groupbox` | `8px` | グループ枠の角丸 |
| `radius-control` | `4px` | ボタン・入力欄の角丸 |
| `radius-preset-nav` | `4px` | プリセット送りボタンの角丸 |

#### 高さ揃え・アライメントのルール

パラメータ名によってラベルが1行（`Delay`）だったり2行（`Predelay\nFeedback`）だったりするため、素朴に実装すると同じ`size`のノブでも全高がラベルの行数分ブレてしまい、隣り合う`GroupBox`（Delay / Modulation / Filter）の高さが揃わず「洗練されていない」印象になる。これを防ぐため:

- `Knob`のラベル領域は`size-knob-label-height`（28px＝2行分）で**固定**し、1行のときは内容を上下中央寄せする。これによりラベルの行数に関わらず、同じ`size`のノブは常に同じ全高になる
- `GroupBox`は`items-start`で子要素（ノブ）を上揃えし、パディングも固定値（`space-groupbox-pad-*`）を使う。ノブの全高が揃っていれば、内容量に関わらずGroupBox自体の高さも自動的に揃う
- 複数の`GroupBox`を横に並べる行（例: Delay / Modulation / Filter）は`items-start`のflexで揃え、ノブ数が異なるグループ同士でも上端・高さ双方が一致する
- セクション間の間隔は「異なる種類のセクション間は`space-section-gap-x`（横）/ `space-section-gap-y`（縦）、同じ種類のノブ系コンポーネントを並べる“ツマミの段”内は`space-knob-row-gap-x`、グループ内の細かい間隔は`space-knob-gap-inner`」の3段階に統一し、場当たり的な`gap`値を使わない

#### 余白を残さないための方針

パネル幅は`max-width: 800px`に固定しているため、パラメータ数の多いセクション（8つのノブなど）を1行に収めようとすると単純な等倍縮小では収まらないことがある。その場合は次の優先順位で調整する:

1. まず間隔（`space-knob-row-gap-x` / `space-knob-gap-inner` / `space-groupbox-pad-x`）を詰める
2. それでも収まらない場合、優先度の低いパラメータ群のノブサイズを`size-knob-md`→`size-knob-sm`に落とす（主役の`Decay`/`Mix`は`lg`のまま維持し、情報階層を保つ）
3. 行の途中半端な位置で折り返して余白ができるくらいなら、詰めて1行に収める方を優先する

### 2.4 エフェクト

| トークン名 | 値 | 用途 |
|---|---|---|
| `shadow-panel-outer` | `0 24px 60px rgba(0,0,0,0.5)` | パネル全体の浮き上がり |
| `shadow-panel-inset` | `inset 0 1px 0 rgba(255,255,255,0.05), inset 0 -1px 0 rgba(0,0,0,0.4)` | パネル上下のベベル |
| `shadow-knob` | `0 2px 4px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)` | ノブの立体感 |
| `glow-accent` | `0 0 8px var(--color-accent-mint-glow)` | アクティブ値インジケーター・点灯メーターの発光 |
| `transition-control` | `120ms ease-out` | ノブ回転・ボタン状態変化のトランジション |
| `gradient-spectrum-fill` | `linear-gradient(180deg, rgba(94,234,212,0.25), rgba(94,234,212,0.02))` | Spectrum Analyzerのエリア塗りつぶし |
| `gradient-matrix-scale` | `linear-gradient(180deg, mint 0%, #232523 50%, amber 100%)` | Matrix Weightsのカラースケール凡例 |

## 3. コンポーネント仕様

### 3.1 `Knob`（ロータリーノブ）

パラメータ1つを表す回転ノブ。

- **構成要素**
  - ノブ本体（`color-knob-body-inner` → `color-knob-body-outer` の放射状グラデ、`color-knob-bezel` の外周リム）
  - 値インジケーター（中心から伸びる短いポインターライン、白〜`color-accent-mint`）
  - 周囲のドット目盛（270°スイープ、非アクティブ = `color-accent-mint-dim`、アクティブ範囲 = `color-accent-mint` + `glow-accent`）
  - 下部ラベル（`font-size-label`、`color-text-secondary`。`\n`で複数行ラベルにも対応。表示領域は`size-knob-label-height`で固定し、1行/2行どちらでも同じ`size`のノブは全高が揃う）
  - さらにその下、`valueLabel`（任意）を指定するとフォーマット済みの数値（例: `3.20 s`、`120 Hz`）を`color-accent-mint`で表示
- **バリアント**: `size` = `lg`(64px) / `md`(56px) / `sm`(48px)
- **状態**: `default`, `hover`（ベゼルがわずかに明るくなる）, `active/dragging`（グローが強まる）, `disabled`（彩度を落とす）
- **Props例**: `label`, `value`, `min`, `max`, `defaultValue`, `size`, `valueLabel`, `onChange`

### 3.2 `GroupBox`（パラメータグループ枠）

関連するノブ群（例: Delay / Modulation / Filter）を囲む枠。

- 角丸の薄い枠線（`color-groupbox-border`、`radius-groupbox`）
- 左上に小さなラベル（枠線を分断する形で配置、`font-size-groupbox-label`、背景は`color-groupbox-label-bg`でパネル背景を隠す）
- パディングは`space-groupbox-pad-top` / `space-groupbox-pad-x` / `space-groupbox-pad-bottom`で固定
- 内部に `Knob` を複数、`items-start`・`space-knob-gap-inner`間隔で配置するコンテナ。`Knob`側の高さが揃っている前提のため、GroupBox自体の高さもノブ数に関わらず自動的に揃う

### 3.3 `LevelMeter`（レベルメーター）

垂直方向のセグメント式ピークメーター。

- トラック背景 `color-meter-track`、点灯セグメントは下→上に `color-meter-fill-bottom` → `color-meter-fill-top` のグラデーション
- 上端に近いセグメントほど明るく発光（`glow-accent`）
- 下部に短いラベル（`I` / `O` など）
- **Props例**: `level`（0-1）, `label`, `orientation`（既定は縦）

### 3.4 `ModuleLockup`（ロゴ/モジュール名）

- 太字・幅広フォントの製品名（`font-size-logo`）
- 直下に小さくトラッキングを広げたサブタイトル（`font-size-logo-sub`）
- 右詰め・パネル右側に配置される想定
- `title` / `subtitle` はいずれもoptional。未指定時は何も描画しない

### 3.5 `PresetBar`（プリセット操作バー）

パネル下部の帯状コントロール群。

- 左: `◀` / `▶` のプリセット送りボタン（`radius-preset-nav`、正方形に近い小型ボタン）
- プリセット名表示フィールド（`color-control-bg` の角丸インセット枠、テキストは `color-accent-mint` で強調表示、`font-size-preset`）
- 新規プリセット名入力欄（`saveName` / `onSaveNameChange`。`Save`ボタンと組み合わせて「名前を付けて保存」を表現）
- `Save` / `Init` ボタン（`color-control-bg` 背景、`color-control-border`）
- `Bypass` トグルボタン（オン時に `color-accent-mint` 文字色＋グロー）
- 最右: ブランドロゴ（`brandName`、optional。未指定時は非表示）

### 3.6 `Dropdown`

- ラベル（任意）+ ネイティブ`<select>`をラップしたセレクトボックス。`color-control-bg`背景・`color-control-border`枠線、右端にシェブロンアイコン。hover時に枠線が`color-accent-mint`に変化
- Matrix関連の設定（Matrix種別、Delay Lines数、Matrix Stages数）に使用
- **Props**: `label`, `options({label, value}[])`, `value`, `onChange`, `disabled`

### 3.7 `ToggleSwitch`

- ラベル + ピル型のトグル。OFF時は`color-toggle-track-off`のダークトラック、ON時は`color-accent-mint-dim`トラック＋`glow-accent`
- `Infinite` / `Freeze` のような二値パラメータに使用
- **Props**: `label`, `checked`, `onChange`, `disabled`

### 3.8 `SpectrumAnalyzer`

- 対数周波数軸（20Hz〜20kHz）× dB軸（0〜-100dB）のスペクトラム表示。線・エリア塗り・HPF/LPFマーカーはすべてミント系
- 内部の`<svg>`は`viewBox`固定＋`preserveAspectRatio="none"`＋`flex-1`（親が`h-full`）で構成し、**縦横比を保たず親コンテナの高さいっぱいに伸縮する**。`PluginPanel`では隣接する列（Loss表示・I/Oメーター）と`items-stretch`で高さを揃えることで、他の列と同じ高さまでグラフを拡大している
- 実際の音声解析は行わず、**props経由で任意のデータに差し替え可能**:
  - `curve?: number[]`（HPF/LPFのエンベロープ線。未指定時は`hpfHz`/`lpfHz`から4次ロールオフを近似計算した曲線をデフォルト表示）
  - `noise?: number[]`（背景のギザギザしたノイズフロア。未指定時は決定的な疑似乱数で生成）
  - `hpfHz`, `lpfHz`（カットオフ周波数。カーブ上にマーカー＋ラベル表示）
- 見出し行に「Preview spectrum — HPF + LPF」の凡例を表示

### 3.9 `MatrixWeights`

- FDNのフィードバック行列の重みを表すヒートマップ。セルは`-1〜+1`の値を「アンバー(-1) → ダーク(0) → ミント(+1)」で色分け（`gradient-matrix-scale`）
- 右側に縦方向のカラースケール凡例（`+1` / `0` / `-1`）
- `data?: number[][]` をpropsで受け取り、**未指定時は決定的な疑似乱数パターンをデフォルト表示**
- 幅は利用側のレイアウトに委ねる（`PluginPanel`では下段で`flex-1`として横幅いっぱいに広げている）

### 3.10 `StatReadout`

- ラベル + infoアイコン + 数値、または簡易スパークライン（`trend?: number[]`、ミント色）のどちらかを表示
- `Spectral Loss`（トレンド表示）/ `Sparsity Loss`（数値表示）に使用

### 3.11 `PluginPanel`（外枠コンテナ）

- 上記コンポーネントすべてを内包する角丸パネル（`radius-panel`、`color-panel-bg`、`shadow-panel-outer` + `shadow-panel-inset`）
- 背景に `color-bg-canvas` と `color-bg-canvas-glow`（波状のミントグローを模したデコレーション）を敷く
- レイアウト: 上段に `StatReadout`（Spectral/Sparsity Loss）+ `ToggleSwitch`（Infinite/Freeze）+ `SpectrumAnalyzer` + I/Oメーター + ロゴ、中段（ツマミの段）に Decay/Mix ノブと `GroupBox` で束ねたパラメータノブ群（Delay系 / Modulation系 / Filter系）を1行に集約、下段に Matrix設定（Dropdown×3）+ `MatrixWeights`、最下段に `PresetBar`
- 上段は`items-stretch`で揃え、`SpectrumAnalyzer`が左列（Loss表示）・右列（メーター）と同じ高さまで縦に伸びる
- パラメータ（Decay / Mix / Delay / Predelay / Predelay Feedback / External Feedback / Modulation / Damping / HPF / LPF）は内部状態として保持し、ノブの`valueLabel`をリアルタイム更新。HPF/LPFの値は`SpectrumAnalyzer`のカーブにもそのまま反映される
- `matrixData` / `spectralLossTrend` / `sparsityLoss` はpropsで外部から差し替え可能

## 4. レイアウトグリッド（参考）

```
┌──────────────────────────────────────────────────────────────────┐
│ Spectral Loss     SPECTRUM ANALYZER                   [I][O] LOGO │
│ Sparsity Loss                                                     │
│ Infinite / Freeze                                                 │
├──────────────────────────────────────────────────────────────────┤
│ (Decay)(Mix) ┌Delay───────────┐┌Modulation─┐┌Filter────┐          │
│              │Delay Predelay …││Mod Damp   ││HPF LPF   │          │
│              └─────────────────┘└───────────┘└──────────┘         │
├──────────────────────────────────────────────────────────────────┤
│ Matrix設定(Dropdown×3)   MATRIX WEIGHTS                            │
├──────────────────────────────────────────────────────────────────┤
│ Preset ◀ [Init] ▶ [name入力] [Save][Init][Bypass]                 │
└──────────────────────────────────────────────────────────────────┘
```

- 1段目: 左列に`StatReadout`（Spectral/Sparsity Loss）と`ToggleSwitch`（Infinite/Freeze）を縦積み、中央に`SpectrumAnalyzer`（`items-stretch`で左列・右列と同じ高さまで伸長）、右にI/Oメーターとロゴ
- 2段目: `Decay`/`Mix`と3つの`GroupBox`（Delay / Modulation / Filter）を**すべて1行に集約**した「ツマミの段」。間隔は`space-knob-row-gap-x`、収まりきらない場合はノブサイズを`sm`に落として対応する（上記「余白を残さないための方針」参照）
- 3段目: Matrix設定（Dropdown×3、左、幅固定）と`MatrixWeights`（右、`flex-1`で残り幅いっぱいに拡大）
- 4段目: `PresetBar`

## 5. Storybookでの管理方針

- 各コンポーネント（`Knob`, `GroupBox`, `LevelMeter`, `ModuleLockup`, `PresetBar`, `Dropdown`, `ToggleSwitch`, `SpectrumAnalyzer`, `MatrixWeights`, `StatReadout`, `PluginPanel`）を個別ストーリーとして登録
- デザイントークンは1箇所（`src/styles/globals.css` の `@theme` ブロック）に集約し、Tailwindのユーティリティクラスから参照する
- ノブのサイズ違い・メーターのレベル違い・Bypassのオン/オフなど、状態バリエーションをストーリーとして網羅する
